import images from "./images";

export const DATA_TO_FETCH = () => {
  return {
    signUpData: {
      title: "Stay on top of your finance with us.",
      description:
        "We are your new financial Advisors to recommed the best investments for.",
    },
    assetsData: [
      {
        id: "1",
        title: "Rp 200.000",
        subtitle: "Buy “APPL” Stock",
        date: "TUE 22 Jun 2020",
      },
      {
        id: "2",
        title: "Rp 150.000",
        subtitle: "Buy “APPL” Stock",
        date: "TUE 22 Jun 2020",
      },
      {
        id: "3",
        title: "Rp 1.000.000",
        subtitle: "Buy “APPL” Stock",
        date: "TUE 22 Jun 2020",
      },
    ],
    bankData: [
      {
        id: "1",
        title: "Bank of Amrica - 0182128xxx",
        bg: images.bank1,
      },
      {
        id: "2",
        title: "Zenith Bank - 0182128xxx",
        bg: images.bank2,
      },
    ],
    homePageNews: [
      {
        id: 1,
        title: "Basic type of investments",
        description:
          "This is how you set your foot for 2020 Stock market recession. What’s next...",
      },
      {
        id: 2,
        title: "Basic type of investments",
        description:
          "This is how you set your foot for 2020 Stock market recession. What’s next...",
      },
    ],
    homePageData: [
      {
        id: "1",
        title: "Gold",
        subtitle: "30% return",
        bg: images.goldCard_vertical,
      },
      {
        id: "2",
        title: "Silver",
        subtitle: "60% return",
        bg: images.silverCard_vertical,
      },
      {
        id: "3",
        title: "Platinum",
        subtitle: "70% return",
        bg: images.platinumCard_vertical,
      },
    ],
    profileData: [
      {
        title: "Contact Info",
        navigateTo: "Contact",
      },
      {
        title: "Source of Funding Info",
        navigateTo: "Bank Account",
      },
      {
        title: "Bank Account Info",
        navigateTo: "Bank Account",
      },
      {
        title: "Document Info",
        navigateTo: "Bank Account",
      },
      {
        title: "Settings",
        navigateTo: "Bank Account",
      },
    ],
    contactData: [
      {
        placeHolder: "Warren Buffet",
        label: "Name",
        id: "Name",
        type: "text",
      },
      {
        placeHolder: "05 November 1993",
        label: "Birthdate",
        id: "Birthdate",
        type: "text",
      },
      {
        placeHolder: "Male",
        label: "Gender",
        id: "Gender",
        type: "text",
      },
      {
        placeHolder: "warren.buff@invest.ai",
        label: "Email",
        id: "Email",
        type: "email",
      },
      {
        placeHolder: "-",
        label: "Phone Number",
        id: "Phone Number",
        type: "text",
      },
      {
        placeHolder: "-",
        label: "Address",
        id: "Address",
        type: "adress",
      },
    ],
    notificationData: [
      {
        id: "1",
        title: "Apple stocks just increased. Check it now",
        dataTime: "15 min ago",
        bg: images.cover1,
      },
      {
        id: "2",
        title: "Apple stocks just increased. Check it now",
        dataTime: "15 min ago",
        bg: images.cover2,
      },
      {
        id: "3",
        title: "Apple stocks just increased. Check it now",
        dataTime: "15 min ago",
        bg: images.cover3,
      },
    ],
    createaAccountData: {
      title: "Create an account",
      description: "Invest and double your income now",
      bottomText: "Already have an account?",
    },
    loginData: {
      title: "Login",
      description: "Log in to your account",
      bottomText: "Don't have an account already?",
    },
  };
};
