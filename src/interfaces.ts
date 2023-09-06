// Main HomeLinks

export type LinkType = {
  icon: string;
  name: string;
  placeholderLink: string;
};
export interface HomeLinksProps {
  homeLinksData: {
    phoneMockupImage: string;
    mainHeader: string;
    mainInstructions: string;
    addNewLinkButtonCopy: string;
    welcomeMessage: {
      secondaryHeader: string;
      secondaryMainImage: string;
      secondaryInstructions: string;
    };
    navbarProps: {
      mainLogoDesktop: string;
      mainLogoSmall: string;
      logoLinkPage: string;
      logoProfilePage: string;
      linkPageCopy: string;
      profileDetailsPageCopy: string;
      buttonPreviewCopy: string;
      buttonPreviewIcon: string;
    };

    saveButton: {
      btnCopy: string;
    };
    defaultLink: LinkType;

    linkFormProps: {
      heading: string;
      removeButton: string;
      platformHeading: string;
      linkSubheading: string;
      sources: LinkType[];
    };
  };
}

// Navigation Bar Props

export interface NavBarProps {
  navbarProps: {
    mainLogoDesktop: string;
    mainLogoSmall: string;
    logoLinkPage: string;
    logoProfilePage: string;
    linkPageCopy: string;
    profileDetailsPageCopy: string;
    buttonPreviewCopy: string;
    buttonPreviewIcon: string;
  };
}

export type UserLink = {
  name: string;
  userLink: string;
  linkId: number;
};