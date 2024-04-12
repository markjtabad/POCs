# Welcome to APM Tool

Congratulations! You have successfully onboarded your project using the [APM Tool](https://apm.manulife.com). 
Please refer to information provided below to learn more about APM Tool and how it works.

# Overview

APM Tool (aka Onboarding Tool) is a web-based application designed to help teams to adopt DevOps practices rapidly and conveniently. Using this tool, 
teams can easily create/update their projects to [CICD standards](https://cpcnissgwp01.americas.manulife.net:23200/display/CETES/Provisioning+API+Service+for+PCF), and moreover, can also manage their projects within specific Business Units (BU) and squads. You can access the provAPI flow diagram [here](https://cpcnissgwp01.americas.manulife.net:23200/plugins/gliffy/viewer.action?inline=false&pageId=132419424&name=basic-flow&version=14&ceoid=132419424&key=CETES&lastPage=%2Fpages%2Fviewpage.action%3FpageId%3D132419424&imageUrl=%2Fdownload%2Fattachments%2F132419424%2Fbasic-flow.png%3Fversion%3D14%26modificationDate%3D1589300101300%26api%3Dv2&gonUrl=%2Fdownload%2Fattachments%2F132419424%2Fbasic-flow%3Fapi%3Dv2%26version%3D14)

# What does APM Tool do?

The tool executes different number of steps depending upon whether the project being onboarded is a new project, or an existing project. These steps can be categorized as:

  - GitLab project setup
  - Jenkins files configuration
  - Project files configuration
  - Jenkins Jobs creation

# GitLab Project Setup

The tool creates a new project if it doesn't exist, else updates the existing project only. The project is created/updated
with the settings mentioned in the Squad config. The following steps are taken by the tool:

  - Creates a GitLab project for new project
  - Creates GitFlow branches
  - Configures Merge Request Approvers
  - Configures Push Rule
  - Configures Protected Branch
  - Configures webhooks for the jenkins jobs
  - Configures jenkins files as discussed below

# Jenkins files
Jenkins file are created/updated in the develop branch of the project. These files contain all the information and attributes related to running the jenkins jobs that are created by the tool. The files created depends on the deployment type and project type. In case of PCF and component, all the files mentioned below are created. For all the other options, release files would be omitted.

  - common-ci.properties
  - common-deploy.properties
  - dev-ci.(Jenkinsfile/properties)
  - dev-promotion.(Jenkinsfile/properties)
  - dev-deploy.(Jenkinsfile/properties)
  - release-ci.(Jenkinsfile/properties)
  - release-promotion.(Jenkinsfile/properties)
  - prod-ci.(Jenkinsfile/properties)
  - prod-deploy.(Jenkinsfile/properties)
  - tst-deploy.(Jenkinsfile/properties)
  - uat-deploy.(Jenkinsfile/properties)

---
**NOTE:**
Jenkins files created from this tool are designed to target a specific structure which would cover most of the configuration task. 
However, teams are advised to go through and see if they need any further changes for their project.
---

# Project files

Files required for PCF deployment are added to the new GitLab component projects created through this tool. The file created follow the provisioning API standards. Therefore, the files are added for DEV, TST, UAT, and PROD environment and are the following.

  - manifest-dev.yml
  - manifest-tst.yml
  - manifest-uat.yml
  - manifest-prod.yml
  - services.json
  - autoscaler.json

---
**NOTE:**
Jenkins files created from this tool are designed to target a specific structure which would cover most of the configuration task. 
However, teams are advised to go through and see if they need any further changes for their project.
---

# Jenkins Jobs

APM Tool also creates a folder with the below jobs on Jenkins for the project. These are created in relation to the jenkins files mentioned above. Therefore, the jobs would be as follows for a component application:

  - [projectName]_Develop_CI
  - [projectName]_Develop_Deploy
  - [projectName]_Develop_Promotion
  - [projectName]_PROD_FIX_CI
  - [projectName]_PROD_Deploy
  - [projectName]_Release_CI
  - [projectName]_Release_Promotion
  - [projectName]_TST_Deploy
  - [projectName]_UAT_Deploy

Please refer to the view summary of the project on the tool for the link to the project's jenkins jobs.


