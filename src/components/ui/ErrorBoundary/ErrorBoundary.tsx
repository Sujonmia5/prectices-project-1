"use client";
import { Component, ReactNode } from "react";
interface ErrorBoundaryProps {
  fallback: ReactNode;
  children: ReactNode;
}
interface ErrorBoundaryState {
  hasError: boolean;
}

export default class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
    };
  }
  static getDerivedSateFromError(error: any) {
    console.log(error);
    return {
      hasError: true,
    };
  }
  render(): ReactNode {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}
