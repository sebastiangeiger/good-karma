#E2E testing with generator-angular
This repo documents how to do e2e testing with [generator-angular](https://github.com/yeoman/generator-angular).

##What is the problem?
After my initial `yo angular` command was done, I could not get e2e tests to run.
When I finally found something that worked for me, distilled from numerous github issues, I decided to document it here.

##How to solve it
This repo essentially consists of three commits

1. I executed `yo angular` [[9e50408](https://github.com/sebastiangeiger/good-karma/commit/9e5040822da73a3aa1bbece6aedb71f8a90f6f8b)]
2. I added a test against the default homepage [[c524bf4](https://github.com/sebastiangeiger/good-karma/commit/c524bf4a1ddec67e824d0e6ac7b6bb4182982dae)]
3. This is the important step: I changed the config in two ways: (a)  proxy localhost:9000 into the root of the karma instance and (b) mount the yeoman folder. [[6edb9f3](https://github.com/sebastiangeiger/good-karma/commit/6edb9f306100f85e11a594b22769d3ac9c2b2809)]
	
I hope this helps.