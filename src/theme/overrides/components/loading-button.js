// import { loadingButtonClasses } from '@mui/lab/LoadingButton';

// // ----------------------------------------------------------------------

// export function loadingButton(theme) {
//   return {
//     MuiLoadingButton: {
//       styleOverrides: {
//         root: ({ ownerState }) => ({
//           ...(ownerState.variant === 'soft' && {
//             [`& .${loadingButtonClasses.loadingIndicatorStart}`]: {
//               left: 10,
//             },
//             [`& .${loadingButtonClasses.loadingIndicatorEnd}`]: {
//               right: 14,
//             },
//             ...(ownerState.size === 'small' && {
//               [`& .${loadingButtonClasses.loadingIndicatorStart}`]: {
//                 left: 10,
//               },
//               [`& .${loadingButtonClasses.loadingIndicatorEnd}`]: {
//                 right: 10,
//               },
//             }),
//           }),
//         }),
//       },
//     },
//   };
// }

import { loadingButtonClasses } from "@mui/lab/LoadingButton";

// ----------------------------------------------------------------------

export function loadingButton(theme) {
  return {
    MuiLoadingButton: {
      styleOverrides: {
        root: (params) => {
          const ownerState = params?.ownerState || {}; // Fallback for undefined ownerState
          const variant = ownerState.variant || 'contained';  // Default to 'contained' if variant is undefined

          console.log("ownerState:", ownerState);  // Check if this gets logged

          return {
            ...(variant === 'soft' && {
              [`& .${loadingButtonClasses.loadingIndicatorStart}`]: {
                left: 10,
              },
              [`& .${loadingButtonClasses.loadingIndicatorEnd}`]: {
                right: 14,
              },
              ...(ownerState.size === 'small' && {
                [`& .${loadingButtonClasses.loadingIndicatorStart}`]: {
                  left: 10,
                },
                [`& .${loadingButtonClasses.loadingIndicatorEnd}`]: {
                  right: 10,
                },
              }),
            }),
          };
        },
      },
    },
  };
}

