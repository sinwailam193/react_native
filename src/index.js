import React, { Component } from "react";

import Header from "./components/header";

type Props = {};
export default class App extends Component<Props> {
    render() {
        return (
            <Header headerText="Albums!" />
        );
    }
}
