<!DOCTYPE html>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<html>
<head>
	<meta charset="utf-8" />
	<title>CAT</title>
	<link rel="stylesheet" href="css/login.css" />
	<link rel="stylesheet" href="css/headerfooter.css" />
	<link rel="stylesheet" href="css/main.css" />
	<link rel="stylesheet" href="lib/bootstrap/css/bootstrap.css" />
	<link rel="stylesheet" href="css/starterkit.css" />
</head>
<body>
    <div class="navbar navbar-fixed-top">
        <div class="navbar-inner header-banner">
            <a class="brand header-text" data-bind="attr: { href: '' }">
                <span>CAT</span>
            </a>
        </div>
    </div>
	<div class="container login-margin">
		<form method="POST" class="form-horizontal">
			<div class="col-sm-4 control-label"></div>
			<div>
				<h3>Login</h3>
			</div>
			<c:if test="${! empty failureMessage}">
			<div class="form-group">
				<div class="col-sm-4 control-label"></div>
				<div id="login-error" class="col-sm-5">You have entered an invalid username or password!</div>
			</div>
			</c:if>
			<div class="form-group">
				<label for="username" class="col-sm-4 control-label"></label>
				<div class="col-sm-5">
					<input id="username" name="j_username" placeholder="Username" type="text"
						class="col-sm-10 form-control login-input-height" autofocus/>
				</div>
			</div>
			<div class="form-group">
				<label for="password" class="col-sm-4 control-label"></label>
				<div class="col-sm-5">
					<input id="password" name="j_password" placeholder="Password" type="password"
						class="form-control login-input-height" />
				</div>
			</div>
			<div class="form-group">
				<div class="col-sm-4 control-label"></div>
				<div class="col-sm-4">
					<button id="submit" type="submit">Submit</button>
				</div>
			</div>
		</form>
	</div>
</body>
</html>