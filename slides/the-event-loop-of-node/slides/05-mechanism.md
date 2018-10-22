<!-- sectionTitle: Mechanism -->

## Mechanism

<img src="../images/mechanism.png" class="event-loop-mechanism" />

---

## Phases

<br />

The event loop has 6 phases.

* timers
* pending callbacks
* idle, prepare
* poll
* check
* close callbacks

<br />

These phases have a FIFO job queue that has callbacks to execute  
and execution of JavaScript is executed in a phase somewhere excepted "idle, prepare".

---

## Phases

### Timers Phase

This phase is the starting point of the event loop.  
Callbacks is executed in this phase's queue.

### Pending Callbacks Phase

---

## nextTickQueue / microTaskQueue

### nextTickQueue

It has callbacks that registered by `process.nextTick`.  
It is executed the fastest among _asynchronous_ execution.

### microTaskQueue

It has callbacks that registered by `promise`.

<br />

```javascript
/* output order */
/* 1            */ process.nextTick(() => console.log('nextTick'));
/* 4            */ Promise.resolve().then(() => console.log('promise'));
/* 2            */ process.nextTick(() => console.log('nextTick'));
/* 5            */ Promise.resolve().then(() => console.log('promise'));
/* 3            */ process.nextTick(() => console.log('nextTick'));
```

---

<img src="../images/event-loop-queue.png" />

nextTickQueue and microTaskQueue execute  
when each phases' queue has empty and finished.
