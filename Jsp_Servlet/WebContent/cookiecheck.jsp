<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<%
	Cookie[] cookies = request.getCookies();
	
	for(Cookie c : cookies) {
		out.println("쿠키이름:"+c.getName()+"<br>");
		out.println("쿠키값:"+c.getValue()+"<br>");		
	}
	%>
	
	<a href="cookieset.jsp">처음으로</a>
</body>
</html>