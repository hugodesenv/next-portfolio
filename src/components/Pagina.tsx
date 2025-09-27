import { CSSProperties } from "react";

export const Pagina = ({ children }: any) => {
  return (
    <div style={style}>
      {children}
    </div>
  )
}

const style = {
  position: 'relative',
  zIndex: 1,
  backgroundColor: "white",
  margin: "0px auto",
  marginTop: "20px",
  marginBottom: "20px",
  borderRadius: "20px 20px 55px 35px / 400px 100px 100px 100px",
  boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
  padding: "30px",
  width: "75%",
} as CSSProperties;