```
initialState = { lastAction: '' };

<Grid spacing='medium'>
  <SplitButton onSelect={value => setState({ lastAction: value })}>
    <SplitButton.Item value='one'>One</SplitButton.Item>
    <SplitButton.Item value='two'>Two</SplitButton.Item>
    <SplitButton.Item value='three'>Three</SplitButton.Item>
  </SplitButton>
  <Text>Last action: {state.lastAction}</Text>
</Grid>
```

Types:

```
<Grid columns={2}>
  <SplitButton label='Small' type='default'>
    <SplitButton.Item value='one'>One</SplitButton.Item>
    <SplitButton.Item value='two'>Two</SplitButton.Item>
    <SplitButton.Item value='three'>Three</SplitButton.Item>
  </SplitButton>
  <SplitButton label='Medium' type='primary'>
    <SplitButton.Item value='one'>One</SplitButton.Item>
    <SplitButton.Item value='two'>Two</SplitButton.Item>
    <SplitButton.Item value='three'>Three</SplitButton.Item>
  </SplitButton>
  <SplitButton label='Small' type='default' pill>
    <SplitButton.Item value='one'>One</SplitButton.Item>
    <SplitButton.Item value='two'>Two</SplitButton.Item>
    <SplitButton.Item value='three'>Three</SplitButton.Item>
  </SplitButton>
  <SplitButton label='Medium' type='primary' pill>
    <SplitButton.Item value='one'>One</SplitButton.Item>
    <SplitButton.Item value='two'>Two</SplitButton.Item>
    <SplitButton.Item value='three'>Three</SplitButton.Item>
  </SplitButton>
</Grid>
```

Sizes:

```
<Grid columns={1}>
  <SplitButton label='Small' size='small'>
    <SplitButton.Item value='one'>One</SplitButton.Item>
    <SplitButton.Item value='two'>Two</SplitButton.Item>
    <SplitButton.Item value='three'>Three</SplitButton.Item>
  </SplitButton>
  <SplitButton label='Medium' size='medium'>
    <SplitButton.Item value='one'>One</SplitButton.Item>
    <SplitButton.Item value='two'>Two</SplitButton.Item>
    <SplitButton.Item value='three'>Three</SplitButton.Item>
  </SplitButton>
  <SplitButton label='Large' size='large'>
    <SplitButton.Item value='one'>One</SplitButton.Item>
    <SplitButton.Item value='two'>Two</SplitButton.Item>
    <SplitButton.Item value='three'>Three</SplitButton.Item>
  </SplitButton>
</Grid>
```

Disabled:

```
<SplitButton disabled onSelect={value => console.log(value)}>
  <SplitButton.Item value='one'>One</SplitButton.Item>
  <SplitButton.Item value='two'>Two</SplitButton.Item>
  <SplitButton.Item value='three'>Three</SplitButton.Item>
</SplitButton>
```

Separators:

```
<SplitButton>
  <SplitButton.Item value='reply'>Reply</SplitButton.Item>
  <SplitButton.Separator />
  <SplitButton.Item value='reply-to-all'>Reply to all</SplitButton.Item>
  <SplitButton.Item value='forward'>Forward</SplitButton.Item>
</SplitButton>
```

Overriding the primary label:

```
<SplitButton label='My label'>
  <SplitButton.Item value='one'>One</SplitButton.Item>
  <SplitButton.Item value='two'>Two</SplitButton.Item>
  <SplitButton.Item value='three'>Three</SplitButton.Item>
</SplitButton>
```

Overriding the primary click handler:

```
<SplitButton
  onClick={() => console.log('Primary click handler')}
  onSelect={value => console.log(value)}
>
  <SplitButton.Item value='one'>One</SplitButton.Item>
  <SplitButton.Item value='two'>Two</SplitButton.Item>
  <SplitButton.Item value='three'>Three</SplitButton.Item>
</SplitButton>
```

RTL support:

```
<SplitButton dir='rtl'>
  <SplitButton.Item value='one'>One</SplitButton.Item>
  <SplitButton.Item value='two'>Two</SplitButton.Item>
  <SplitButton.Item value='three'>Three</SplitButton.Item>
</SplitButton>
```

Custom menu items:

```
const { Selectable } = require('../')

class Item extends React.Component {
  render () {
    const {
      children,
      disabled,
      onMouseDown,
      onMouseEnter,
      onMouseLeave,
      selected
    } = this.props

    const style = { padding: '4px 16px' }

    if (disabled) {
      style.textDecoration = 'line-through'
    } else if (selected) {
      style.textDecoration = 'underline'
      style.fontWeight = 'bold'
    }

    return (
      <View
        aria-activedescendant={ selected }
        aria-disabled={ disabled }
        onMouseDown={ onMouseDown }
        onMouseEnter={ onMouseEnter }
        onMouseLeave={ onMouseLeave }
        style={ style }
      >
        { children }
      </View>
    )
  }
}

const MyItem = Selectable(Item, {
  preventDefault: true
});

<Grid spacing='medium'>
  <SplitButton onSelect={value => setState({ lastAction: value })}>
    <MyItem value='one'>One</MyItem>
    <MyItem value='two'>Two</MyItem>
    <MyItem value='three'>Three</MyItem>
    <MyItem value='four' disabled>Four</MyItem>
    <MyItem value='five'>Five</MyItem>
  </SplitButton>
  <Text>Last action: {state.lastAction}</Text>
</Grid>
```