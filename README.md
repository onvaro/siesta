## Siesta

A rails mountable engine setting up
[siesta](http://www.bryntum.com/products/siesta/) for testing ExtJS.

### Install

Add siesta to Gemfile:

```ruby
gem 'siesta'
```

And then run `bundle install` to install siesta. That's all.

### Usage

1. Mount the engine in your rails application.

```ruby
# config/routes
if Rails.env.development?
  mount Siesta::Engine => '/'
end
```

2. Create tests under `spec/javascripts` or `test/javascripts`.

```javascript
// spec/javascripts/sample.t.js
StartTest(function(t) {
  t.ok(1 == 1, 'A sample test');
})    
```

3. Create `spec/javascripts/test_harness.js` to start.

```javascript
// spec/javascript/test_harness.js
var Harness = Siesta.Harness.Browser.ExtJS;

Harness.start({
  group: 'Sample',
  items: ['/assets/sample.t.js']
});
```

4. Start up the application, and then run your tests through
   [http://localhost:3000/siesta](http://localhost:3000/siesta).

```bash
rails s
```

For more detail about how to test your ExtJS, please visit:
[http://www.bryntum.com/products/siesta/docs/](http://www.bryntum.com/products/siesta/docs/)

### License

This project rocks and uses GPLv3.
