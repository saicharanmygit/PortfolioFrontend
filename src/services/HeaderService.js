import axios from "axios";
 //const Add_HEADER_URL="http://localhost:2021/header/addPortfolio";
 const FETCH_DATA_URL="http://localhost:2021/api/master/fetchData";
 
 const HEADER_BASE_URL="http://localhost:2021/header";
 const COMPOSITION_BASE_URL="http://localhost:2021/Composition";

class HeaderService{
    //to create the portfolio
    createPortfolio(portfolio){
        return axios.post(`${HEADER_BASE_URL}/addPortfolio`,portfolio)
    }

    //to fetch all portfolios
    fetchAllPortfolio(){
        return axios.get(`${HEADER_BASE_URL}/fetchAllportfolio`)
    }

    //to display the  required details in landing page
    fetchHomePageData(){
        return axios.get(`${HEADER_BASE_URL}/fetchHomeData`)
    }
    //to fetch the usm
    fetchData(){
        return axios.get(FETCH_DATA_URL)
    }

    fetchByIsNumber(isinNumber){
        const FETCH_BY_ISNUMBER="http://localhost:2021/api/master/fetchByIsin/"+isinNumber;

        return axios.get(FETCH_BY_ISNUMBER)

    }

    createComposition(portfolioComposition){
        return axios.post(`${COMPOSITION_BASE_URL}/addComposition`,portfolioComposition)
    }

    

}
export default new HeaderService();
