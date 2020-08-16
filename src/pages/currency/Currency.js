import { connect } from "react-redux";

import CurrencyPage from "./CurrencyPage"
import { getCurrencyRequest, getCurrencySuccess } from "../../redux/actions/action"
import {
    getCurrency,
    getIsLoading,
} from "../../redux/selectors/index"

const mapStateToProps = (state) => ({
    currency: getCurrency(state),
    isLoading: getIsLoading(state)
})

export default connect(
    mapStateToProps,
    { getCurrencyRequest, getCurrencySuccess }
)(CurrencyPage);
