import React from 'react';

const Page = (props) => {
    // var pageContent;
    // if (props.currentPage === "home") {
    //   pageContent = "This is the home page";
    // } else if (props.currentPage === "about") {
    //   pageContent = "This is the about page";
    // } else if (props.currentPage === "contact") {
    //   pageContent = "This is the contact page";
    // } else {
    //   pageContent = "This is the home page";
    // }

    var pageContent = `This is the ${props.currentPage} page`;

    return (
        <div>
            <div className="container">
            <h2>{props.currentPage.charAt(0).toUpperCase() + props.currentPage.slice(1)}</h2>
               {pageContent}
            </div>
        </div>
    );
}

export default Page;