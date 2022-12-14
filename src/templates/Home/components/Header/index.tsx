import { useEffect, useState } from "react";

import {
  BlueBackground,
  RedBackground,
  Logo,
  Stars,
  PokeballBackgroundBlue,
  PokeballBackgroundRed,
} from "@assets";

import * as S from "./styles";

export function Header() {
  const [background, setBackground] = useState<"red" | "blue">("red");

  useEffect(() => {
    setInterval(() => {
      setBackground((prev) => (prev === "blue" ? "red" : "blue"));
    }, 5000);
  }, []);

  return (
    <S.Container>
      <S.Image src={BlueBackground} isShowing={background === "blue"} />
      <S.Image src={RedBackground} isShowing={background === "red"} />

      <S.LogoContainer>
        <S.Logo src={Logo} />
        <h4>
          Made by{" -> "}
          <span>Matheus Sena Rosa</span>
        </h4>
      </S.LogoContainer>

      <S.CenterContent>
        {background === "red" && <S.Title>Who is that Pokémon?</S.Title>}
        {background === "blue" && <S.Title>Catch them all!</S.Title>}

        <S.Description>
          The perfect guide for those who want to hunt Pokémons around the world
        </S.Description>

        <S.PokeballContainer>
          <S.Stars src={Stars} type={background} />
          {background === "blue" && (
            <S.Pokeball type="blue" src={PokeballBackgroundBlue} />
          )}
          {background === "red" && (
            <S.Pokeball type="red" src={PokeballBackgroundRed} />
          )}
        </S.PokeballContainer>
      </S.CenterContent>
    </S.Container>
  );
}
