import { AppRegistry } from 'react-native';
import App from './src/components/App';
import { name as appName } from './app.json';

Blob.prototype[Symbol.toStringTag] = 'Blob';
File.prototype[Symbol.toStringTag] = 'File';

AppRegistry.registerComponent(appName, () => App);
