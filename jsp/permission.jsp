<%@ taglib prefix="sec" uri="http://www.springframework.org/security/tags" %>
<SCRIPT>
	var is_admin=false; 
	var is_student=false;  
	var is_college=false;    
	<sec:authorize access="hasAuthority('PERMISSION_Admin')">
		is_admin = true; 
	</sec:authorize>

	<sec:authorize access="hasAuthority('PERMISSION_Student')">
		is_student = true; 
	</sec:authorize>

	<sec:authorize access="hasAuthority('PERMISSION_College')">
		is_college = true; 
	</sec:authorize>


</SCRIPT>
