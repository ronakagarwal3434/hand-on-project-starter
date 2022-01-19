import React from "react";
import Button from "../../components/Button/Button";
import Navbar from "../../components/Navbar/Navbar";
import DashboardStyles from "./Dashboard.module.css";
import bgremovePic from "../../images/bgremove.svg";
import Card from "../../components/Card/Card";

function Dashboard() {
  return (
    <div>
      <Navbar />
      <div className={DashboardStyles.container}>
        <div className={DashboardStyles.showcase}>
          <div className={DashboardStyles.showcaseImg}>
            <img src={bgremovePic} />
            <div className={DashboardStyles.semicircle}></div>
          </div>
          <div className={DashboardStyles.showcaseInfo}>
            <div>
              <h1>BACKGROUND IMAGE REMOVER</h1>
              <h2>100% automatic and free</h2>
            </div>
            <Button body="View App" color="#1E272E" />
          </div>
        </div>
        <div className={DashboardStyles.heading}>All APIs</div>
        <div className={DashboardStyles.cards}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
