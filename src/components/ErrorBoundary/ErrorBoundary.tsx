import React, { Component, ErrorInfo, ReactNode } from "react";
import StyledInfoBox from "../UI/StyledInfoBox/StyledInfoBox";

type Props = {
  children: ReactNode;
};

type State = {
  hasError: boolean;
};

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return <StyledInfoBox>Ups, there was an error.</StyledInfoBox>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
