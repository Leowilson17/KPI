import * as React from "react";
import styles from "./Kpis.module.scss";
import { sp } from "@pnp/sp/presets/all";
import { useEffect, useState } from "react";

// img variable
const addImg = require("../../../ExternalRef/Assests/add.png");
const calendarImg = require("../../../ExternalRef/Assests/calendar.png");
const arrowImg = require("../../../ExternalRef/Assests/aim.png");


function Kpi() {
  interface IData {
  Title:string;
  Img:any;
  Number:string;
  Average:string;
  }
  const obj = [
    {
      content: "Travelers on Assignment(TOA)",
      img: addImg,
      num: "3,496",
      averageofWeek: "4 week Average 3,435",
    },
    {
      content: "Net Weeks Booked(NWB)",
      img: calendarImg,
      num: "3,518",
      averageofWeek: "4 week Average 3,369",
    },
    {
      content: "Q4 TOA Goal 3,800",
      img: arrowImg,
      num: "92.0%",
      averageofWeek: "%to Q4 TOA Goal",
    },
  ];

  // state variable
  const[data,setdata]=useState<IData[]>([]);

  // function declaration
  function getdatafromconfigureList() {
    const dataObj: IData[] =[];
    sp.web.lists
      .getByTitle("KPIConfigList")
      .items.get()
      .then((val) => {
        val.map((data)=>{
          var Pic = data.Image;
          var getPic = JSON.parse(Pic).serverRelativeUrl;
          dataObj.push(
            {
              Title:data.Title,
              Img:getPic,
              Number:data.Number,
              Average:data.Description
            }
          )
        })
        setdata(dataObj);
        
        
      })
      .catch((error) => {
        err(error,"getdatafromconfigureList");
      });
  }

// error handling function 
function err(msg,val){
  console.log(msg,val);
  
}

  // use effect
useEffect(()=>{
getdatafromconfigureList();
},[]);

  return (
    <div className={styles.mainContianer}>
      <div className={styles.headerRippon}>
        <h4>Host Healthcare KPIs | Week Ending October 22,2022</h4>
      </div>
      <div className={styles.kpiboxFlex}>
        {data.map((value) => {
          return (
            <div className={styles.box}>
              <p style={{marginBottom:24}}>{value.Title}</p>
              <div className={styles.flexContainer}>
                <img src={value.Img} alt="" />
                <div className={styles.rightText}>
                  <b>{value.Number}</b>
                  <p>{value.Average}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Kpi;
