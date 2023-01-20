const styles = {
  wrapper:
    "fixed left-0 top-0 bottom-0 z-50 w-14 bg-white flex flex-col h-screen justify-between items-center py-6 rounded-tr-4xl rounded-br-4xl",
  logo: "text-4xl text-gray-800",
  navListItems: "flex flex-col items-center w-full",
  navItem: "text-gray-400 hover:text-gray-800 text-xl py-4 cursor-pointer",
  navItemActive: "text-blue-600 hover:text-blue-700",
  tooltip: "absolute w-auto min-w-max left-16 text-base font-medium hidden",
  bottomWrapper: "flex flex-col justify-between items-center",
  notifications:
    "w-10 h-10 bg-gray-100 hover:bg-gray-200 cursor-pointer rounded-xl flex items-center justify-center text-gray-800 text-lg relative mb-4",
  badge:
    "h-5 w-5 flex justify-center items-center text-white absolute -top-1 -right-1 bg-red-500 text-xs rounded-full",
  settingsLogo: "text-3xl text-gray-400 hover:text-gray-800 cursor-pointer",
};

export default styles;
