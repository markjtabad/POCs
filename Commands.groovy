#!groovy

node(label: env.NODE_LABEL) {
	deleteDir();
	stage('1: Date Formatting'){
		println "Inside Stage 1: ";
		bat "cd";
		//bat "mkdir folder1";
		dir("folder1"){
			println "Inside folder1: ";
			bat "cd";
			def currentDate = new Date();
			println "Current Date: " + currentDate.format("MMM dd, yyyy hh:mm AM/PM");
		}
		println "Exited folder1: ";
		bat "cd";
	}
	stage ('2: dir()'){
		print "Inside Stage 2: ";
		bat "cd";
		dir("folder1"){
			println "Inside folder1: ";
			bat "cd";
			//bat "mkdir folder2";
			dir("folder2"){
				println "Inside folder2: ";
				bat "cd";
			}
			println "Exited folder2: ";
			bat "cd";
		}
		println "Exited folder1: ";
		bat "cd";
	}
	stage ('3: Node OS '){
		print "Inside Stage 3: Node OS = " + isUnix();
	}
	stage ('4: Local File Upload'){
		print "Inside Stage ${env.STAGE_NAME}";
		checkout scm;
		bat "dir";
		fileUtils = load "local-file-upload.groovy";
		fileUtils.download('FILE_LOC');
		bat "dir";

		String fullPath = env.FILE_LOC;
		int index = fullPath.lastIndexOf("/");
		String fileName = fullPath.substring(index + 1);
		println "File Name: ${fileName}";
	}
	stage ('5: '){
		print "Inside Stage 5: ";
	}
}
