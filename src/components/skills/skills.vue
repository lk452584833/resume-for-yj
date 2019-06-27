<template>
	<div class="skills">
		<div class="skill-item">
			<span class="name">毕业院校</span>
			<span class="icon-center">/</span>
			<span class="msg">{{info.graduateSchool}}</span>
			<span class="graduateTime">{{info.graduateTime}}</span>
		</div>
		<div class="skill-item">
			<span class="name">专<span class="hiden">专业</span>业</span>
			<span class="icon-center">/</span>
			<span class="msg">{{info.major}}</span>
		</div>
		<div class="skill-item">
			<span class="name">学<span class="hiden">学历</span>历</span>
			<span class="icon-center">/</span>
			<span class="msg">{{info.education}}</span>
		</div>
		<div class="skill-item major clearfix">
			<span class="name">专业技能</span>
			<span class="icon-center">/</span>
			<span class="items">
				<span class="item" v-for="item in info.majorSkills"
				:key="item.name"
				:class="{highlight:item.highlight}"
				>{{item.name | toUpper}}</span>
			</span>
		</div>
	</div>
</template>

<script>
	export default{
		props: {
			info: {
				type: Object
			}
		},
		filters: {
			toUpper(name) {
				return name.toUpperCase()
			}
		}
	}
</script>

<style lang="less">
	.skills{
		padding: 48px 75px 0;
		.skill-item{
			margin-bottom:30px;
			.icon-center{font-size: 16px;color:#8f8f8f;line-height: 26px;margin:0 14px;}
			span{display: inline-block;font-size: 26px;line-height: 26px;}
			.hiden{visibility: hidden;}
			.graduateTime{margin-left:14px;color:#515151;font-size: 22px;}
			.items{
				width: 440px; float: left;
				.item{
					width: 132px;margin-right: 12px;margin-bottom:10px; background: #d6d6d6;color:#3b3b3b;
					text-align: center; line-height: 40px;
					&.highlight{background: #02fec1;}
				}
			}
			&.major > span{
				float: left;
			}
		}
	}
</style>
