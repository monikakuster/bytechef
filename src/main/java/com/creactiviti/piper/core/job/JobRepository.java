/* 
 * Copyright (C) Creactiviti LLC - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Arik Cohen <arik@creactiviti.com>, Mar 2017
 */
package com.creactiviti.piper.core.job;

public interface JobRepository {
  
  Job findOne (String aJobId);
  
  Job save (Job aJob);
  
  Job findJobByTaskId (String aTaskId);
  
}
