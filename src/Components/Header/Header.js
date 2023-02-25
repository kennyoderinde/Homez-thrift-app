import React from "react";
import {Link} from "react-router-dom"
import "./Header.css"

const Header = () => {

    const nav = [
        {ID:1, label: "Mobile Phones"},
        {ID:2, label: "Furniture"},
        {ID:3, label: "Clothes"},
        {ID:4, label: "Electronics"},
        {ID:5, label: "Kitcheneries"},
        {ID:6, label: "Refrigerators"},
        {ID:7, label: "Electrical Appliances"}

    ]


    return(
        <React.Fragment>
        <div className="header fixed flex homez">
            <div className="header-logo">
                <img  src={require("../ui/homez-lg-2.PNG")} />
            </div>
            <div className="location rel flex ai homez" >
                <div className=" icon-search ico s24"><i class="fa fa-search"></i></div>
                <input type="text" className="label" placeholder="Your Location" value="" />
                <button className="arro s24"><i class="fa fa-angle-double-down"></i></button> 
            </div>

            <div className="search flex homez" >
                <input type="text" className="query" placeholder="Find items: kitcheneries and more..." value="" />
                <button className="go s24  cfff"><i class="fa fa-search"></i></button>
            </div>

            <div className="action flex homez" >
                <Link to="/account/signin" className=" color fontb s16 noulh noul">Sign in</Link>
                <button className="sell flex color homez">
                    <div  className="icon-plus s24 ico"><i class="fa fa-plus"></i></div> 
                    <h2 className="s18 font ">Sell</h2>
                </button>

            </div>
        </div>
        <div className="hnav fixed flex homez">
            <button className="view-cates flex homez color">
                <h2 className="s18 font">All Categories</h2>
                <button className="arro s24"><i class="fa fa-angle-double-down"></i></button>
            </button>
            {
                nav.map(item => {
                    return(
                        <Link to={"/browser/" + item.ID} className="noul noulh color bl font s15">{item.label}</Link>
                    )
                })
            }

        </div>
        <div className="hclr" />
        </React.Fragment>
    )
}
export default Header 