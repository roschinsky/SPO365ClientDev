import * as React from 'react';
import styles from './FirstWebPart.module.scss';
import { IFirstWebPartProps } from './IFirstWebPartProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class FirstWebPart extends React.Component<IFirstWebPartProps, {}> {
  public render(): React.ReactElement<IFirstWebPartProps> {
    return (
      <div className={ styles.firstWebPart }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome to SharePoint!</span>
              <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
              <p className={ styles.description }>{escape(this.props.description)}</p>
              <a href="https://aka.ms/spfx" className={ styles.button }>
                <span className={ styles.label }>Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
