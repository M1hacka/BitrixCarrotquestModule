// ��� ������ � ������
(function () {
	if (typeof cookie == 'undefined')
	{
		Cookie = {
			// ���������� cookie ���� ���� ��� undefined
			get: function (name) {
				var matches = document.cookie.match(new RegExp(
				  "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
				))
				return matches ? decodeURIComponent(matches[1]) : undefined 
			},

			// �c����������� cookie
			set: function (name, value, props) {
				props = props || {}
				var exp = props.expires
				if (typeof exp == "number" && exp) {
					var d = new Date()
					d.setTime(d.getTime() + exp*1000)
					exp = props.expires = d
				}
				if(exp && exp.toUTCString) { props.expires = exp.toUTCString() }

				value = encodeURIComponent(value)
				var updatedCookie = name + "=" + value
				for(var propName in props){
					updatedCookie += "; " + propName
					var propValue = props[propName]
					if(propValue !== true){ updatedCookie += "=" + propValue }
				}
				document.cookie = updatedCookie

			},

			// ������� cookie
			delete: function (name) {
				this.set(name, null, { expires: -1 })
			}
		};
	};
}) ();