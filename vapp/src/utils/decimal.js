import Decimal from 'decimal.js'

export function fixed(balance, fixed = 6) {
    return new Decimal(balance).div(1e18).toFixed(fixed)
}

export function toToken(balance) {
    return new Decimal(balance).mul(1e18).toHex()
}