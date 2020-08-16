import { connect } from "react-redux";

import CurrenciesPage from "./CurrenciesPage"
import { getPageRequest } from "../../redux/actions/action"
import {
    getPageNumbers,
    getNumberOfPages,
    getIsLoading,
    getConcFiltred
} from "../../redux/selectors/index"

const mapStateToProps = (state) => ({
    currencies: getConcFiltred(state),
    pageNumbers: getPageNumbers(state),
    numberOfPages: getNumberOfPages(state),
    isLoading: getIsLoading(state)
})

export default connect(
    mapStateToProps,
    { getPageRequest }
)(CurrenciesPage);