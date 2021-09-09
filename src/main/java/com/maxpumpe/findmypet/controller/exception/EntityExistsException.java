package com.maxpumpe.findmypet.controller.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;


@ResponseStatus(code = HttpStatus.SEE_OTHER, reason = "exists")
public class EntityExistsException extends Exception {

	private static final long serialVersionUID = 1L;
    
}