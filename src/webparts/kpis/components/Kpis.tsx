import * as React from 'react';
import styles from './Kpis.module.scss';
import { IKpisProps } from './IKpisProps';
import { escape } from '@microsoft/sp-lodash-subset';
import Kpi from './App';
import "../../../ExternalRef/Css/style.css";
import { sp } from "@pnp/sp/presets/all";


export default class Kpis extends React.Component<IKpisProps, {}> {

  constructor(prop: IKpisProps, state: {}) {

    super(prop);
    sp.setup({
      spfxContext: this.props.context,
    });
  }
  public render(): React.ReactElement<IKpisProps> {
    const {
      description,
      isDarkTheme,
      environmentMessage,
      hasTeamsContext,
      userDisplayName
    } = this.props;

    return (
 <Kpi/>
    );
  }
}
