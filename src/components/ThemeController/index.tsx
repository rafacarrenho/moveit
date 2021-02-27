import React from "react";
import * as S from "./styles";
import { CgDarkMode } from "react-icons/cg";

const ThemeController = () => {
  return (
    <S.Wrapper>
      <CgDarkMode title="Switch dark mode" />
    </S.Wrapper>
  );
};

export default ThemeController;
