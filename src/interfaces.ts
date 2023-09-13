// Main HomeLinks

import {
  DraggableProvidedDragHandleProps,
  DraggableProvidedDraggableProps,
} from 'react-beautiful-dnd';

export type LinkType = {
  icon: string;
  name: string;
  placeholderLink: string;
  userLink?: string;
  isValid?: boolean;
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
      inputLinkIcon: string;
      sources: LinkType[];
      dragAndDropIcon: string;
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
  linkId: string;
};

// Link form interface
export interface LinkFormProps {
  linkFormProps: {
    removeButton: string;
    heading: string;
    platformHeading: string;
    linkSubheading: string;
    inputLinkIcon: string;
    sources: LinkType[];
    dragAndDropIcon: string;
  };
  linkId: string;
  linkName: string;
  linkUserLink: string;
  linkPlaceholder: string;
  linkIcon: string;
  enumeration: number;
  defaultLink: LinkType;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ref?: any;
  draggableProps?: DraggableProvidedDraggableProps;
  dragHandleProps?: DraggableProvidedDragHandleProps;
  isDragging: boolean;
}
