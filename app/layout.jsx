import './globals.css'
import Navigation from '@/components/Navigation';
import Footer from "../components/Footer";
export const metadata = {
  title: 'Joel-app',
  description: 'Generated by create next app',
  keyword:'react'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous"/>
        {/* <link rel="stylesheet" href="https://bootswatch.com/5/sketchy/bootstrap.min.css" /> */}
        {/* <link rel="stylesheet" href="https://bootswatch.com/5/spacelab/bootstrap.min.css" /> */}
        {/* <link rel="stylesheet" href="https://bootswatch.com/5/sandstone/bootstrap.min.css" /> */}
        <link rel="stylesheet" href="https://bootswatch.com/5/minty/bootstrap.min.css" />
        
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>

      </head>
      <body>
        <Navigation/>
        <div className="container p-4">
          {children}
        </div>
        </body>
        <footer>
          {/* <Footer/> */}
        </footer>
    </html>
  )
}
