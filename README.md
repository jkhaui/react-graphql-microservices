<h1 align="center"><strong>Simple React + GraphQL WordPress Widget</strong></h1>

<br />

![](https://imgur.com/ousyQaC.png)

<div align="center"><strong>🚀 Modernise Your WordPress Site!</strong></div>
<div align="center">Many thanks to the great work of the GraphQL community & Apollo for providing the boilerplate for this widget (https://github.com/graphql-boilerplates/react-fullstack-graphql).</div>

1. Yarn install && Yarn start.
2. Make sure you have WordPress with the GraphQL extension installed and the endpoint exposed for querying (likely https://mysite.com/graphql
3. Enqueue the correct react-dom and react-dev-dom dependencies.

 wp_enqueue_script( 'react-dev', get_template_directory_uri() . '/js/react.development.js', false ); 
 wp_enqueue_script( 'react-dom-dev', get_template_directory_uri() . '/js/react-dom.development.js', array( 'react-dev' ), false );
 wp_enqueue_script( 'graphql', get_template_directory_uri() . '/js/react_graphql_widget.js', array( 'react-dev', 'react-dom-dev' ), true);
 wp_enqueue_script( 'react-contact', get_template_directory_uri() . '/js/react-contact.js', array( 'react-dev', 'react-dom-dev' ), true );

