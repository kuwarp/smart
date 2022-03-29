import React,{useState} from "react";

function Sidebar() {
    const [nav, setNav] = useState([
        {label: "Main-cousre", slug: "/", icon: "icon-spoon"},
        {label: "Snack", slug: "discover", icon: "icon-mug"},
        {label: "Special Meal", slug: "cates", icon: "icon-tag"},
        {label: "Dessert", slug: "my-courses", icon: "icon-knife"},
        {label: "Beverages", slug: "my-courses", icon: "icon-apple"}

    ])
    const [currentPage, setCurrentPage] = useState("/");
           
    var navigation = [];
    for(let i = 0; i < nav.length; i++){
        navigation.push(
            <li key={"nav-" + i + "-" + nav[i].slug}>
                <a href={nav[i].slug} className={" link noul movel clrs" +(currentPage==nav[i].slug ? " on" :" ")}>
                    <div className={"ico sizeic icn movel " + nav[i].icon} />
                    <h2 className="lbl sizef abso movel blck ">{nav[i].label}</h2>
                </a>
            </li>
        );
    }


    return(<div className="sidebar justify-c rel rgt ">
            
    <ul className="nav">
       {navigation}
       </ul>
       </div>)
}

export default Sidebar;