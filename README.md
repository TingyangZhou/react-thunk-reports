# React-Redux With Thunks Project

Read the ENTIRE instructions before running specs for the first time; it
contains important information about running tests with Vitest, a fast testing
suite built to take advantage of Vite's module-based approach.

## Background

You will be adding Redux **thunks** onto a self-reflection report app called
Progress Tracker Lite. This application should allow for the creation,
display, updating, and deletion of reports.

The necessary React components are provided in the __src__ folder.

This application allows the user to perform CRUD on reports. Each report has
three fields: `id`, `understanding`, and `improvement`.

The Redux store, reducer, and action creators are provided for you.

## Setup

For this project, you will test your app with two different mock servers, V1 and
V2. The servers are functionally the same, they just have different data in
their "databases". This allows for more robust testing by enabling you (and the
specs) to test your app against different sets of data.

The tests will automatically run your code against these two servers. To test
your code with these servers in the browser, you will need to invoke a separate
instance of your app to communicate with each server. The following instructions
tell you how to do this. (If any step of the setup fails, ask an Instructor for
help.)

1. Download or clone the repository.
2. Create an instance of your React app that will make requests to the V1
   Server.
   - Run `npm install`.
   - Run `PORT=5173 npm run dev-v1` to start the React app with the V1 Server.
     (You can view it at [http://localhost:5173].)
3. In another terminal, create an instance of your React app that will make
   requests to the V2 Server.
   - Run `npm install` (if you haven't already).
   - Run `PORT=5174 npm run dev-v2` to start the React app with the V2 Server.
     (You can view it at [http://localhost:5174].)

Changes you make to the data (i.e., reports) will persist across refreshes and
restarts. **To reseed a server's database and restore its initial data set,
simply click the "Reset the Database" button at the bottom of the app's index
page in the browser.**

## Your task

Your task for this project is threefold:

1. Properly connect the components in the React application to the Redux store
2. Create thunks that enable your components to request, delete, create, update,
   and process reports from API endpoints
3. Store the resulting reports data in the Redux store

Do not worry about styling or trying to give your app a pretty display.
Functionality is all you need to worry about in this project.

**DO NOT** manipulate any code in the **src/main.jsx** file. Doing so may break
some test specs.

Take some time to familiarize yourself with the following code and documentation
as you will need to understand them to complete your task:

- Component files found in **src/components**
- Redux reducer, actions, and action creators found in **src/store/reports.js**
- API documentation for the V1 and V2 servers found in
  __server-api-documentation/server-api.md__. (The two servers have the same
  API.)

## Running specs

You will be testing your code using Vitest with React Testing Library. Run `npm
test` to run all the test specs. Vitest will then enter watch mode, which will
start watching your files for changes and run all the test specs whenever your
files change. To run all your tests again rather than waiting for a file change,
use the `a` command, as outlined in the `h`elp menu of options for running
tests manually. To exit watch mode, type `q` (or `^c`).

See the 'Debugging Tips' section below for information on how to run tests from
a single spec file.

For this practice, Vitest specs live in a single **\_\_tests\_\_** folder within
the **src** folder:

1. **src/\_\_tests\_\_/1-display-report-list.test.jsx**
2. **src/\_\_tests\_\_/2-remove-report.test.jsx**
3. **src/\_\_tests\_\_/3-display-report-details.test.jsx**
4. **src/\_\_tests\_\_/4-create-report.test.jsx**
5. **src/\_\_tests\_\_/5-update-report.test.jsx**

## Debugging tips

Here are some tips for making debugging in Vitest a little less intimidating.

1. Vitest often loads modules--and does other things--asynchronously. As a
   result, the output can multiply significantly when running tests from
   multiple files at once, as each test takes control of the console in
   seemingly random order and re-prints its updated status as each async
   function completes. You can either wait for the final results or, to minimize
   the output, run a single file of tests at a time (see next item).

2. To run the tests for a single test file, specify the file's name of the file
   after `npm test`. What's more, the filename argument will be treated as a
   regular expression, so you don't have to specify the full name. E.g., to run
   only the tests in **3-display-report-details.test.jsx**, simply run

   ```sh
   npm test 3
   ```

   in the project's root directory.

   (You will have to specify a bit more for any number that also appears in the
   test files' full path.)

3. Vitest is currently configured to show the console output in your terminal.
   This enables you to see the output of any `console.log`s in your code. It
   also means that the information from Redux logger will print in your
   terminal. If you ever want to turn this off, just open **vite.config.js** and
   add `silent: true` under the `test` key.

4. Vitest is pretty good about restarting in-process tests if you make further
   changes to the relevant files. Nevertheless, if you think a failing test
   should have passed, always re-run it before you start despairing and trying
   to debug. Similarly, if your results seem repeatedly off or the watch feature
   doesn't seem to be triggering, try killing and restarting your Vitest
   process. As with most software, sometimes it just needs to reboot.

5. Examine the test files to see the expected behavior.

## How to proceed

The project has 5 phases, with each phase corresponding to one of the five
test files. The instructions for each phase appear in the appropriately marked
README. The instructions for Phase 1, e.g., appear in __README-ph1.md__.

The instructions for each phase generally consist of a description of the
desired functionality. The details of how best to implement that functionality
are left for you to decide. Keep the React-Redux data flow in mind as you
think about what parts of the application you need to address to implement the
desired functionality.

**Note:** Some phases require the successful completion of earlier phases for
their test specs to pass. Phases 2-5 all require the successful implementation
of Phase 1. Phases 4 and 5 also depend on the successful completion of Phase 3.

## Submission

Once you have finished, make sure you are passing all the test specs by running:

```sh
npm test
```

If you want to submit your project, do the following:

1. Delete the **node_modules** directory.
2. Zip your project.
3. Submit the zip folder through the link on Open.

[http://localhost:5173]: http://localhost:5173
[http://localhost:5174]: http://localhost:5174
# react-thunk-reports
