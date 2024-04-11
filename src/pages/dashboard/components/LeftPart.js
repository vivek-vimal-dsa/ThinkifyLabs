import React, { useEffect, useState } from "react";
import { Heading } from "../../../components/Heading";
import { Text } from "../../../components/Text";
import Flex from "../../../components/Styling/Flex";
import Selector from "../../../components/Selector";
import { StyledInput } from "../../../styles/Input.styles";
import { ProgressBar } from "../../../components/ProgressBar";
import { Button } from "../../../components/Button";
import { StyledLeft } from "../../../styles/Dashboard.styles";
import CreativeCard from "../../../components/CreativeCard";

const LeftPart = (props) => {
  const {
    colorSet,
    isDrawerOpen,
    setIsDrawerOpen,
    setFormData,
    setDrawerColorSelector,
    creativeList,
  } = props;

  const [isActive, setIsActive] = useState("");
  const [searchFilteredData, setSearchFilteredData] = useState([]);
  const [searchInputValue, setSearchInputValue] = useState("");

  const active = (color) => {
    setIsActive(color);
  };

  const onDrawerOpen = () => {
    setIsDrawerOpen(true);
    setFormData({
      title: "",
      subTitle: "",
      bg: "",
    });
    setDrawerColorSelector("");
  };

  const onSearch = (input) => {
    setSearchInputValue(input.target.value);
  };

  const filterItems = (data) => {
    const filterData = data?.filter((item) => item?.bg === isActive);
    setSearchFilteredData(filterData);
  };

  const searchFilter = () => {
    setSearchFilteredData(() => {
      const currentData = [];
      searchFilteredData?.map((item) => {
        item?.title?.includes(searchInputValue) && currentData.push(item);
      });
      return currentData;
    });
  };

  useEffect(() => {
    if (creativeList?.length) {
      setSearchFilteredData(creativeList);
      if (isActive) {
        filterItems(creativeList);
      }
    }
  }, [creativeList]);

  useEffect(() => {
    setSearchInputValue("");
    if (creativeList?.length) {
      filterItems(creativeList);
    }
  }, [isActive]);

  useEffect(() => {
    if (searchInputValue) {
      searchFilter();
    } else if (!searchInputValue && isActive) {
      filterItems(creativeList);
    } else if (!searchInputValue) {
      setSearchFilteredData(creativeList);
    }
  }, [searchInputValue]);

  return (
    <StyledLeft>
      <Heading Text="Filter By:" />
      <Flex width="35rem" jc="space-between" align="flex-start" m="2rem 0 0 0">
        <div>
          <Text Text="color" lh="0" fw="600" />
          <Flex wrap width="15rem">
            {colorSet?.map((item) => (
              <Selector
                bg={item}
                onClick={() => active(item)}
                isActive={isActive}
              />
            ))}
          </Flex>
        </div>
        <div>
          <Text Text="title/subTitle:" lh="0" fw="600" />
          <StyledInput
            type="text"
            placeholder="search across title and subTitle"
            style={{ margin: "1rem 0 0 0" }}
            onChange={onSearch}
            value={searchInputValue}
            disabled={!creativeList.length}
          />
        </div>
      </Flex>
      <Flex m="5rem 0 0 0">
        <ProgressBar length={creativeList?.length} />
        <Text
          Text={creativeList?.length + "/5 Creatives"}
          m="0 0 0 1rem"
          fw="500"
        />
      </Flex>

      <Button
        m="3rem 0 0 0"
        Text="+ Add Creative"
        onClick={onDrawerOpen}
        isDisabled={isDrawerOpen || creativeList?.length >= 5}
      />

      <div style={{ margin: "3rem 0 0 0" }}>
        {searchFilteredData?.map((item, index) => (
          <CreativeCard
            title={item?.title}
            subTitle={item?.subTitle}
            bg={item?.bg}
            key={index}
          />
        ))}
      </div>
    </StyledLeft>
  );
};

export default LeftPart;
