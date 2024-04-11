import React, { useEffect, useState } from "react";
import LeftPart from "./components/LeftPart";
import { PageWidth } from "../../components/Width";
import { AxiosGet } from "../../api";
import Drawer from "../../components/Drawer";

const Dashboard = () => {
  const [colorSet, setColorSet] = useState([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    subTitle: "",
    bg: "",
  });
  const [drawerColorSelector, setDrawerColorSelector] = useState("");
  const [creativeList, setCreativeList] = useState([]);

  const getColors = () => {
    AxiosGet({ endPoint: "api/random?count=6" })
      ?.then((color) => {
        setColorSet(color?.data?.colors);
      })
      ?.catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getColors();
  }, []);

  const leftPartProps = {
    colorSet,
    isDrawerOpen,
    setIsDrawerOpen,
    setFormData,
    setDrawerColorSelector,
    creativeList,
  };

  const drawerProps = {
    ...leftPartProps,
    formData,
    drawerColorSelector,
    setCreativeList,
  };

  return (
    <PageWidth bg="#FFF" align="left">
      <LeftPart {...leftPartProps} />
      {isDrawerOpen && <Drawer {...drawerProps} />}
    </PageWidth>
  );
};

export default Dashboard;
