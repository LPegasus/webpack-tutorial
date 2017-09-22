import './index.css';
import { isArray, rAF, isBoolean } from './utils';
import doge from './doge.jpg';
import tt from './tt.gif';

const performancDecorator = (fieldName) => (target, name, descriptor) => {
  const oriRender = target.render;
  return {
    ...descriptor,
    value: function() {
      const elm = oriRender.call(this);
      return React.cloneElement(elm, {...elm.props, className: (elm.props.className || '') + ' hover-blue' }, elm.props.children);
    }
  }
}

class Demo extends React.Component {
  @performancDecorator('render') render() {
    isBoolean(false); // 演示 babel-plugin 用
    return (
      <div>
        <h1>Hello webpack - 5 Babel-Loader</h1>
        {this.props.children}
      </div>
    );
  }
}

ReactDOM.render(<Demo><img src={doge.url} /><img src={tt.url} /></Demo>, document.body);
