## Overview

```txt
 Performance Timeline    |           Entry            |
       Observer          |    User     |    System    |
          |
          | <------------------------------ <node>
          | <---------------- <mark>
          |
          | <------------------------------ <gc>
          |
          | <---------------- <mark>
          |
          | <---------------- <measure>
          |
          | <---------------- <function>
          |
          | <------------------------------ <http2>
          |
          |
```

<br />

Max entries is 150 by default.
