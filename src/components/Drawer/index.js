import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Heading } from "../Heading";
import Flex from "../Styling/Flex";
import { Button } from "../Button";
import { StyledInput } from "../../styles/Input.styles";
import { Text } from "../Text";
import Selector from "../Selector";

const StyledDrawer = styled.div`
  border-left: 3px solid #000;
  width: 35%;
  min-height: calc(100vh - 6rem);
  padding: 3rem;
  position: sticky;
  top: 0;
  right: 0;
  bottom: 0;
`;

const Form = styled.form`
  margin: 3rem 0 0 0;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const FormItem = styled.div``;

const Drawer = (props) => {
  const {
    setIsDrawerOpen,
    formData,
    setFormData,
    colorSet,
    drawerColorSelector,
    setDrawerColorSelector,
    setCreativeList,
  } = props;

  const [isDisabled, setIsDisabled] = useState(true);

  const onFormValueChange = (data) => {
    setFormData((prev) => ({ ...prev, [data.target.name]: data.target.value }));
  };

  const onFormSubmit = (data) => {
    data.preventDefault();
    if (!formData?.title || !formData?.subTitle || !formData?.bg) {
      alert("please fill all the fields");
    } else {
      setIsDrawerOpen(false);
      setCreativeList((prev) => [formData, ...prev]);
    }
  };

  const active = (color) => {
    setDrawerColorSelector(color);
    setFormData((prev) => ({ ...prev, bg: color }));
  };

  useEffect(() => {
    if (formData?.title && formData?.subTitle && formData?.bg) {
      setIsDisabled(false);
    }
  }, [formData]);

  return (
    <StyledDrawer>
      <Flex jc="space-between">
        <Heading Text="Creative Creation" />
        <Button
          Text="X"
          onClick={() => setIsDrawerOpen(false)}
          width="2rem"
          border="none"
        />
      </Flex>
      <Form onSubmit={onFormSubmit} name="creativeForm">
        <div>
          <FormItem>
            <Text Text="title" lh="0" fw="600" />
            <StyledInput
              type="text"
              placeholder="This is title!"
              id="title"
              name="title"
              value={formData.title}
              onChange={onFormValueChange}
              height="2.5rem"
              width="80%"
              placeholderColor="#000"
            />
          </FormItem>
          <FormItem style={{ margin: "3rem 0 0 0" }}>
            <Text Text="subTitle" lh="0" fw="600" />
            <StyledInput
              type="text"
              placeholder="This is subTitle!"
              id="subTitle"
              name="subTitle"
              value={formData.subTitle}
              onChange={onFormValueChange}
              height="2.5rem"
              width="80%"
              placeholderColor="#000"
            />
          </FormItem>
          <FormItem style={{ margin: "3rem 0 0 0" }}>
            <Text Text="background color" lh="0" fw="600" />
            <Flex wrap width="15rem">
              {colorSet?.map((item) => (
                <Selector
                  bg={item}
                  onClick={() => active(item)}
                  isActive={drawerColorSelector}
                />
              ))}
            </Flex>
          </FormItem>
        </div>

        <Button
          Text="Done"
          width="12rem"
          m="2rem 0 0 0"
          isDisabled={isDisabled}
        />
      </Form>
    </StyledDrawer>
  );
};

export default Drawer;
