module.exports = {
    "plugins": [
        "react"
    ],
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 9,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true,
            "spread": true
        }
    },
    "env": {
        "es6":     true,
        "browser": true,
        "node":    true,
        "mocha":   true,
        "jest":    true
    },   
    "extends": [
        "eslint:recommended", 
        "plugin:react/recommended"
    ],    
    "rules": {
      "no-console": "off",
      "react/prop-types": "off"
    },
    "settings": {
      "react": {
        "pragma": "React",
        "version": "16.0"
      }
    }   
}
 ;