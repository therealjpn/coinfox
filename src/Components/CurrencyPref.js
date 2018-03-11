import React, { Component } from 'react';
import {$currencySymbol} from '../Utils/Helpers';
import {translationStrings} from '../Utils/i18n';
import styled from 'styled-components';

const PrefWrapper = styled.div`
  display: flex;
  margin: 10px auto;
  padding: 0px 10px;
  max-width: 1100px;
`;
const Title = styled.h3`
color: white;
`;

const Selector = styled.div`
  display: flex;
  margin: auto 0px;
  margin-left: auto;
`;

const Label = styled.div`
  width: 30px;
  height: 30px;
  font-size: 16px;
  color: #303032;
  line-height: 30px;
  border-radius: 100%;
  padding:2px;
  background-color: white;
  text-align: center;
  margin: auto 0px;
  margin-right: 10px;
  font-weight: 700;
  font-family: Roboto, sans-serif;
`;


class CurrencyPref extends Component {

  handleSelectChange = (e) => {
    const domElement = e.target.id;
    const newCurrencyPref = e.target.value;
    const currentCurrencyPref = this.props.currency;

    console.log(newCurrencyPref, currentCurrencyPref, domElement);
    this.props.saveNewPref("currency", newCurrencyPref);
  }

  render() {
    const curSymbol = $currencySymbol(this.props.currency);
    const selectCurrency = this.props.supportedCurrencies.map((cur) => {
      return <option key={cur[0]} value={cur[0].toUpperCase()}>{cur[0].toUpperCase()} {cur[1]}</option>
    });
    const string = translationStrings(this.props.language);
    return (
      <PrefWrapper>
        <Title>{string.currencypref}</Title>
        <Selector>
          <Label htmlFor="currency">{curSymbol}</Label>
          <select id="currency" onChange={this.handleSelectChange} value={this.props.currency} name="select">
            {selectCurrency}
          </select>
        </Selector>
      </PrefWrapper>
    );
  }
}

export default CurrencyPref;
