import { Button as AntdButton, Typography } from "antd";

const { Text: AntdText, Link: AntdLink } = Typography;

export const Container: React.FC<
  React.PropsWithChildren<{ style?: React.CSSProperties }>
> = ({ children, style }) => {
  return (
    <div
      style={{
        ...style,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {children}
    </div>
  );
};

export const Card: React.FC<
  React.PropsWithChildren<{ style?: React.CSSProperties }>
> = ({ children, style }) => {
  return (
    <Container
      style={{
        ...style,
        padding: "12px",
        margin: "12px",
        borderRadius: "8px",
        backgroundColor: "rgba(255, 255, 255, 0.25)",
        boxShadow: "0 0 18px rgba(0, 0, 0, 0.25)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
    >
      {children}
    </Container>
  );
};

export const Text: React.FC<
  React.PropsWithChildren<{
    style?: React.CSSProperties;
    size?: string;
    editable?: any;
    copyable?: any;
  }>
> = ({ children, style, size, editable, copyable }) => {
  switch (size) {
    case "small":
      size = "12px";
      break;
    case "medium":
      size = "18px";
      break;
    case "large":
      size = "24px";
      break;
    case "title":
      size = "36px";
      break;
    case "extra":
      size = "80px";
      break;
    default:
      size = "18px";
  }
  return (
    <AntdText
      style={{
        ...style,
        fontSize: size,
      }}
      editable={editable}
      copyable={copyable}
    >
      {children}
    </AntdText>
  );
};

export const Link: React.FC<
  React.PropsWithChildren<{
    style?: React.CSSProperties;
    onClick?: () => void;
    danger?: boolean;
  }>
> = ({ children, style, onClick, danger }) => {
  return (
    <AntdLink
      type={danger ? "danger" : undefined}
      style={{
        ...style,
        fontSize: "12px",
      }}
      onClick={onClick}
    >
      {children}
    </AntdLink>
  );
};

export const Button: React.FC<
  React.PropsWithChildren<{ style?: React.CSSProperties; onClick?: () => void }>
> = ({ children, style, onClick }) => {
  return (
    <AntdButton
      className="need-interaction"
      style={{
        ...style,
        fontSize: "18px",
        height: "40px",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      {children}
    </AntdButton>
  );
};
