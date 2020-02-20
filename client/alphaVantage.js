import { AlphaVantageAPI, } from '../secrets'

import alphaVantage from 'alphavantage'

const alpha = alphaVantage({ key: AlphaVantageAPI, })

export default alpha
