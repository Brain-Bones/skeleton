/* 
    Font Awesome @fontawesome - https://fontawesome.com
    License - https://fontawesome.com/license (Commercial License)
    Copyright 2022 Fonticons, Inc
*/
export type Icon = {
  viewBox?: string;
  path: string;
};

export type Icons = {
  [key: string]: Icon;
  placeholder: Icon;
  svelte: Icon;
  tailwind: Icon;
};

export const icons: Icons = {
  // Default Placeholder
  // Source: https://fontawesome.com/icons/image?s=solid
  placeholder: {
    path: 'M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z'
  },

  // ----------- Brand Logos -----------

  // Svelte
  // Source: https://iconape.com/svelte-logo-by-gengns-logo-icon-svg-png.html
  svelte: {
    viewBox: `0 0 513.978 597.129`,
    path: 'M179.547 545.729c-63.418-10.114-114.409-57.647-126.738-118.147-6.814-33.436-1.056-69.7 15.357-96.718l3.628-5.972-4.271-9.908c-24.281-56.32-9.106-121.877 36.892-159.376 10.666-8.695 132.771-86.226 145.148-92.162 21.395-10.261 41.161-14.203 66.834-13.328 18.527.631 27.235 2.147 43.648 7.597 51.619 17.139 90.63 60.248 101.124 111.747 6.814 33.436 1.056 69.7-15.357 96.719l-3.628 5.972 4.272 9.907c24.28 56.32 9.105 121.877-36.893 159.376-10.665 8.696-132.77 86.227-145.148 92.163-12.055 5.781-25.266 9.867-39.22 12.13-11.505 1.867-33.943 1.866-45.648 0zm40.107-56.452c8.462-1.864 18.23-5.676 24.437-9.538 35.719-22.223 123.574-78.887 127.592-82.293 12.127-10.28 21.731-25.243 26.045-40.577 3.4-12.09 3.396-31.504-.01-43.495-13.838-48.709-63.665-77.61-112.356-65.171-10.868 2.776-18.714 6.93-45.78 24.232-13.075 8.359-25.352 15.857-27.283 16.664-4.16 1.738-13.889 1.925-18.096.347-17.67-6.628-23.849-28.21-11.645-40.68 5.378-5.494 122.039-79.894 127.75-81.47 9.037-2.496 20.352 1.013 26.744 8.293 4.882 5.56 6.727 10.52 6.695 17.99l-.029 6.446 4.904 1.306c12.307 3.278 34.058 14.246 45.35 22.869 2.72 2.076 5.285 3.775 5.7 3.775 1.288 0 5.255-14.95 6.4-24.12 3.407-27.296-9.063-57.132-31.933-76.408-26.294-22.162-62.304-28-94.067-15.252-6.577 2.64-.2-1.29-74.004 45.59-55.791 35.438-59.99 38.319-68.987 47.332-10.858 10.879-16.752 20.816-20.829 35.118-3.414 11.98-3.41 31.399.01 43.435 13.837 48.71 63.663 77.611 112.355 65.171 10.824-2.765 18.631-6.896 45.876-24.271 13.128-8.373 25.406-15.869 27.283-16.657 4.071-1.71 13.823-1.88 18-.314 17.67 6.628 23.848 28.21 11.644 40.679-5.378 5.494-122.038 79.894-127.749 81.47-9.037 2.496-20.352-1.013-26.744-8.293-4.883-5.56-6.728-10.52-6.695-17.99l.028-6.446-4.904-1.306c-12.306-3.278-34.057-14.246-45.35-22.868-2.72-2.077-5.284-3.776-5.699-3.776-1.288 0-5.255 14.95-6.4 24.121-4.265 34.178 16.128 70.808 48.833 87.712 20.186 10.434 40.992 13.203 62.915 8.375z'
  },

  // Tailwind
  // Source: https://worldvectorlogo.com/logo/tailwind-css-2
  tailwind: {
    viewBox: `0.15 0.13 799.7 479.69`,
    path: 'M400 .13c-106.63 0-173.27 53.3-199.93 159.89 39.99-53.3 86.64-73.28 139.95-59.96 30.42 7.6 52.16 29.67 76.23 54.09 39.2 39.78 84.57 85.82 183.68 85.82 106.62 0 173.27-53.3 199.92-159.9-39.98 53.3-86.63 73.29-139.95 59.97-30.41-7.6-52.15-29.67-76.22-54.09C544.48 46.17 499.1.13 400 .13zM200.07 239.97c-106.62 0-173.27 53.3-199.92 159.9 39.98-53.3 86.63-73.29 139.95-59.96 30.41 7.61 52.15 29.67 76.22 54.08 39.2 39.78 84.58 85.83 183.68 85.83 106.63 0 173.27-53.3 199.93-159.9-39.99 53.3-86.64 73.29-139.95 59.96-30.42-7.59-52.16-29.67-76.23-54.08-39.2-39.78-84.57-85.83-183.68-85.83z'
  }
};
