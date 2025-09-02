# lms frontend

### setup instruction

1. clone the project

```
    git clone https://github.com/Uankit9695/lms-frontend-hn.git

```

2. move into the directary

```
    cd lms-frontend

```

2. install depndency

```
    npm i

```

3. run server

```
     npm run dev

```

### adding pluging and dependecis

```
    npm install @reduxjs/toolkit react-redux react-router-dom react-icons react-chartjs-2 chart.js daisyui axios react-hot-toast @tailwindcss/line-clamp
```

### install telwind

```
    npm i install tailwind postcss autoprefixer
```

### add vite.config and taiwind.config both js file in src

```
    <!-- vite confige.js -->
    import { defineConfig } from "vite";
    import react from "@vitejs/plugin-react";

    export default defineConfig({
      plugins: [react()],
    });

     <!-- taiwind.config -->
     /** @type {import('tailwindcss').Config} */
    import daisyui from "daisyui";
    import { Line } from "react-chartjs-2";

    export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
     extend: {},
    },
    plugins: [require("daisyui", require("@tailwindcss/line-clamp"))],
    };


```
