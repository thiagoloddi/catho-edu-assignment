import React, { Component } from 'react';
import injectSheet from 'react-jss';

import { getCustomers, getPrices } from '../../repositories/customers.repository';
import { getProducts } from '../../repositories/products.repository';
import { extractNumbers } from '../../utils/numbers';

import Loading from '../../ui/components/Loading';
import SelectInput from '../../ui/atoms/SelectInput';
import ProductsList from '../../ui/components/ProductsList';
import OrderSummary from '../../ui/components/OrderSummary';

class Checkout extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      sumLoading: false,
      selectedCustomer: '',
      customers: [],
      products: [],
      sum: 0
    };

    this.onNumberInputClick = this.onNumberInputClick.bind(this);
  }

  async componentDidMount() {
    const customersRes = await getCustomers();
    const productsRes = await getProducts();

    const customers = customersRes.data.map(({ name, _id }) => ({ id: _id, label: name }));
    const products = productsRes.data.map(p => ({ 
      ...p, 
      quantity: 0, 
      onInputClick: this.onNumberInputClick.bind(null, p._id),
      onInputChange: this.onNumberInputChange,
      onInputBlur: this.onNumberInputBlur
    }));
		
    this.setState({
      customers,
      products,
			selectedCustomer: customers.filter(({ label }) => label == 'DEFAULT')[0].id,
      loading: false 
    });
    
  }
  
  onSelectInputChange(e) {
    const { value } = e.target;
    this.setState({ selectedCustomer: value, sumLoading: true }, () => {
      this.getPrices(this.state.products);
    });
  }

  onNumberInputClick(id, e) {
    const inc = e.target.id == 'plus' ? 1 : -1;
    const products = this.state.products.map(p => {
      if(p._id == id) {
        return { ...p, quantity: Math.max(0, p.quantity + inc) };
      }

      return p;
    });

    this.setState({ products, sumLoading: true });
    this.getPrices(products);
  }
  onNumberInputChange(e) {
    const { id, value } = e.target;
    const products = this.state.products.map(p => {
      if(p._id == id) {
        return { ...p, quantity: extractNumbers(value) };
      }
      
      return p;
    });

    this.setState({ products });
  }

  async onNumberInputBlur(e) {
    const { id, value } = e.target;

    let inputChanged = false;
    const products = this.state.products.map(p => {
      
      if(p._id == id && value === '') {
        return { ...p, quantity: 0 };
      }
      
      return p;
    });

    this.setState({ products });
    
    if(inputChanged) {
      this.setState({ sumLoading: true });
      this.getPrices(products);
    }
  }
  
  getPrices(products) {
    getPrices(this.state.selectedCustomer, products.filter(({ quantity }) => quantity != 0))
      .then(res => this.setState({ sum: res.data.sum, sumLoading: false }));
  }

  render() {

    const { classes } = this.props;
    const { loading, customers, selectedCustomer, products, sum, sumLoading } = this.state;
    
    return (
      <div>
        <h1 className={classes.heading}>Checkout</h1>
        <div className={classes.info}>
          <label>Customer:</label>
          <SelectInput onChange={this.onSelectInputChange} value={selectedCustomer} options={customers} className={classes.select} />
        </div>
        <ProductsList products={products} />
        <OrderSummary sum={sum} loading={sumLoading} /> 
        <Loading show={loading}/>
      </div>
    );
  }
}

const style = {
  info: {
    position: 'relative',
    display: 'inline-block',
    width: 'calc(100% - 150px)',
    '& label': {
      fontWeight: 'bold'
    },
    '& > *': {
      display: 'inline-block',
      verticalAlign: 'middle'
    },
    '& label + *': {
      marginLeft: '10px'
    },
    '& select': {
      marginRight: '20px'
    }
  },
  button: {
    width: '150px'
  },
  select: {
    width: '150px'
  }
};

export default injectSheet(style)(Checkout);