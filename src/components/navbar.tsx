import { Button } from "@nextui-org/button";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/dropdown";
import { IoLanguage } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";

import { ThemeSwitch } from "@/components/theme-switch";

export const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  function handleFocus(id: string) {
    if (location.pathname !== "/") {
      navigate("/");

      setTimeout(() => {
        onFocus(id);
      }, 1000);
    } else {
      onFocus(id);
    }
  }

  function onFocus(id: string) {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }

  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const locales = [
    {
      name: "Português",
      locale: "pt",
    },
    {
      name: "English",
      locale: "en",
    },
    {
      name: "Español",
      locale: "es",
    },
    {
      name: "Français",
      locale: "fr",
    },
  ];

  function handleChangeLanguage(locale: string): void {
    changeLanguage(locale);
  }

  return (
    <NextUINavbar className="bg-custom" maxWidth="sm" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start" />

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden lg:flex">
          <ThemeSwitch />
        </NavbarItem>

        <NavbarItem className="hidden lg:flex">
          <Dropdown>
            <DropdownTrigger>
              <Button
                isIconOnly
                className="rounded-full text-default-500"
                startContent={<IoLanguage size={20} />}
                variant="light"
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="Languages">
              {locales.map((item) => (
                <DropdownItem
                  key={item.locale}
                  onClick={() => handleChangeLanguage(item.locale)}
                  onPress={() => handleChangeLanguage(item.locale)}
                >
                  {item.name}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="lg:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
        <Dropdown>
          <DropdownTrigger>
            <Button
              isIconOnly
              className="rounded-full text-default-500"
              startContent={<IoLanguage size={20} />}
              variant="light"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Languages">
            {locales.map((item) => (
              <DropdownItem
                key={item.locale}
                onClick={() => handleChangeLanguage(item.locale)}
                onPress={() => handleChangeLanguage(item.locale)}
              >
                {item.name}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </NextUINavbar>
  );
};
