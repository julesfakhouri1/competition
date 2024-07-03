
export interface BelovedGrandChildrenProps {
    description: string;
    img: string
    name: string
}

export interface GrandChildrenProps {
    description: string;
    img: string;
    job: string;
}

export type HandleMobileNavFunction = (item: string) => void;

export interface MobileNavProps {
    mobileNav: string;
    setMobileNav: (mobileNav: string)=> void;
    handleMobileNav: HandleMobileNavFunction;
}

export type HandleNavFunction = (nav: string) => void;

export interface SideNavProps {
    selectedNav: string
    setSelectedNav: (selectedNav: string)=> void;
    handleNav: HandleNavFunction;
}